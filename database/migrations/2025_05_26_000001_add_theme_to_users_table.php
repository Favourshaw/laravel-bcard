
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddThemeToUsersTable extends Migration
{
    /**
     * Run the migrations.
     */

    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('theme')->nullable();
            $table->json('colors')->nullable();
        });
    }
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['theme_template', 'theme_palette']);
        });
    }
}
