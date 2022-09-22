<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class User extends Fixture
{


public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);

        $user= new \App\Entity\User();
        $user->setAge(27);
        $user->setEmail('alexandre.marillesse@gmail.com');
        $user->setFirstname('Alexandre');
        /** @var UserPasswordHasher $hashPassword */
        $user->setPassword('Alex5956');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setTelephone('0689630446');
        $user->setName('Marillesse');
        $manager->persist($user);
        $manager->flush();




    }
}
