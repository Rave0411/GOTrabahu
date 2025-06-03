<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json(['posts' => $posts]);
    }

    public function createPost(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $data['employee_id'] = auth('employee')->id();

        $post = Post::create($data);

        return response()->json([
            'message' => 'Post created successfully.',
            'post' => $post
        ], 201);
    }

    // Update a post
    public function actuallyUpdatePost(Post $post, Request $request)
    {
        if (auth('employee')->id() !== $post['employee_id']) {
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
        if (auth('employee')->id() !== $post['employee_id']) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully.']);
    }

    // Show a post (for editing)
    public function showEditScreen(Post $post)
    {
        if (auth('employee')->id() !== $post['employee_id']) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json(['post' => $post]);
    }
}
