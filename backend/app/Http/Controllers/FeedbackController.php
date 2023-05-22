<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use App\Http\Resources\FeedbackResource;
use App\Http\Requests\FeedbackRequest;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return FeedbackResource::collection(Feedback::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FeedbackRequest $request)
    {
        $new_entry = Feedback::create($request->validated());
        return new FeedbackResource($new_entry);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new FeedbackResource(Feedback::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Feedback::destroy($id);
        return 'Запись успешно удалена!';
    }
}
