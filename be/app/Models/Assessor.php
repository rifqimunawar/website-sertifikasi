<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Assessor extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    const IMAGE_URL_PATH = 'img/assessor';
}
