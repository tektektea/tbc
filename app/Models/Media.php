<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $fillable = ['original_name', 'mime','gallery_image', 'path','extension', 'thumbnail'];
    protected $appends = ['full_path', 'thumbnail_path'];

    public function getFullPathAttribute()
    {
        return $url = url('/storage') . '/' . $this->path;
    }

    public function getThumbnailPathAttribute()
    {
        return $url = url('/storage') . '/' . $this->thumbnail;
    }
}
