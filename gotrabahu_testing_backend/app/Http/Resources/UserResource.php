<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = false;


    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'email' => $this->email,
        ];
    }
}
