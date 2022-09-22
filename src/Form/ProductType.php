<?php

namespace App\Form;

use App\Entity\Product;
use Doctrine\DBAL\Types\FloatType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $fileConstraints=[
            new File(array(
                'maxSize'=>'30000000k',
                'mimeTypes'=>array(
                    'image/*'
                ),
                'mimeTypesMessage'=>'Please Upload a valid Image',
            ))
        ];
        $builder
            ->add('name')
            ->add('price')
            ->add('image',\Symfony\Component\Form\Extension\Core\Type\FileType::class,array('label'=>'fichier','constraints'=>$fileConstraints))
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
