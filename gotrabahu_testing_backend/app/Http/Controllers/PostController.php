<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    // Create a new post (employee requests a skilled person)
    public function createPost(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            // Add more fields as needed
        ]);

        $data['employee_id'] = auth()->id(); // or auth('employee')->id() if using a custom guard

        $post = Post::create($data);

        return response()->json([
            'message' => 'Post created successfully.',
            'post' => $post
        ], 201);
    }

    // Update a post
    public function actuallyUpdatePost(Post $post, Request $request)
    {
        if (auth()->id() !== $post['employee_id']) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string'
        ]);

        $post->update($data);

        return response()->json([
            'message' => 'Post updated successfully.',
            'post' => $post
        ]);
    }

    // Delete a post
    public function deletePost(Post $post)
    {
        if (auth()->id() !== $post['employee_id']) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully.']);
    }

    // Show a post (for editing)
    public function showEditScreen(Post $post)
    {
        if (auth()->id() !== $post['employee_id']) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json(['post' => $post]);
    }
}
