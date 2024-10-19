<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){

        $users = User::select('id','firstname','lastname','avatar','role','created_at','updated_at')->get();

        return Inertia::render("Users/Index",['users'=> $users]);
    }
}
