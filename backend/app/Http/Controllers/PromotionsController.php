<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promotion;
use App\Http\Resources\PromotionsResource;
use App\Http\Requests\PromotionsRequest;

class PromotionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PromotionsResource::collection(Promotion::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PromotionsRequest $request)
    {
        $new_entry = Promotion::create($request->validated());

        return new PromotionsResource($new_entry);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new PromotionsResource(Promotion::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $entry = Promotion::findOrFail($id);
        $entry->update($request->all());
        return new PromotionsResource($entry);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Promotion::destroy($id);
        return 'Запись успешно удалена!';
    }
}
