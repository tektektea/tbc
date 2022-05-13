<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'content', 'thumbnail_path'];

    protected $appends = ['full_path', 'thumbnail_path'];

    public function getFullPathAttribute()
    {
        return $url = url('/storage') . '/' . $this->thumbnail_path;
    }

}
