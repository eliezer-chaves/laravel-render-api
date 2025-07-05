<?php

namespace App\Http\Controllers;

use App\Models\DogsModel;
use Illuminate\Http\Request;

class DogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return DogsModel::all();

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
     
        return DogsModel::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(DogsModel $dogsModel)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DogsModel $dogsModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DogsModel $dogsModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DogsModel $dogsModel)
    {
        //
    }
}
