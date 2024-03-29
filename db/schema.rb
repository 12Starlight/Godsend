# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_04_164230) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "securities", force: :cascade do |t|
    t.string "company_name", null: false
    t.string "ticker", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_name"], name: "index_securities_on_company_name"
    t.index ["ticker"], name: "index_securities_on_ticker", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "watchlist_securities", force: :cascade do |t|
    t.integer "godsend_id", null: false
    t.integer "security_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["godsend_id"], name: "index_watchlist_securities_on_godsend_id"
    t.index ["security_id"], name: "index_watchlist_securities_on_security_id"
  end

end
