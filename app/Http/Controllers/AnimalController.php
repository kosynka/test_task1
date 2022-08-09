<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function index()
    {
        return array(
            'Dogs' => [
                'name'=>'Boxer',
                'price'=>12000
            ],
            'Cats' => [
                'name'=>'Abissin',
                'price'=>17000
            ],
            'Birds' => [
                'name'=>'Bekas',
                'price'=>4000
            ],
        );
    }
}
