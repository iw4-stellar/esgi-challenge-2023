<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use Doctrine\Persistence\ManagerRegistry;

use App\Entity\User;


class SecurityController extends AbstractController
{
    #[Route(path: '/api/register', name: 'api_register', methods: ['POST'])]
    public function register(Request $request, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher) {
        $em = $doctrine->getManager();
        $decoded = json_decode($request->getContent());
        $email = $decoded->email;
        $plaintextPassword = $decoded->password;
        $userType = $decoded->userType;
  
        $user_in_database = $doctrine->getRepository(User::class)->findOneBy(['email' => $email]);

        if ($user_in_database !== null) {
            return $this->json([
                'errors' => [
                    'email' => 'unique',
                ],
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = new User();
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setName('Unknown');
        $user->setEmail($email);
        $user->setPassword($hashedPassword);
        $user->setRolesByUserType($userType);

        $em->persist($user);
        $em->flush();

        return $this->json([
        ], Response::HTTP_CREATED);
    }

    #[Route(path: '/api/me', name: 'api_me',)]
    public function me(Request $request) {
        return $this->json($this->getUser());
    }
}
