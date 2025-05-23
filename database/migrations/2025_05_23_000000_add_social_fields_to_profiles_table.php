<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSocialFieldsToProfilesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->string('linkedin')->nullable();
            $table->string('snapchat')->nullable();
            $table->string('github')->nullable();
            $table->string('others')->nullable();
            $table->string('bname')->nullable();
            $table->string('bmail')->nullable();
            $table->string('behance')->nullable();
            $table->string('dribble')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn([
                'linkedin',
                'snapchat',
                'github',
                'others',
                'bname',
                'bmail',
                'behance',
                'dribble',
            ]);
        });
    }
}
