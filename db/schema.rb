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

ActiveRecord::Schema.define(version: 20160710033156) do

  create_table "api_keys", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "access_token"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["user_id"], name: "index_api_keys_on_user_id"
  end

  create_table "availiabilities", force: :cascade do |t|
    t.integer "user_id"
    t.string  "weekday"
    t.integer "hour"
    t.index ["user_id"], name: "index_availiabilities_on_user_id"
  end

  create_table "equipment", force: :cascade do |t|
    t.string   "category"
    t.integer  "user_id"
    t.string   "equipment_name"
    t.string   "brand"
    t.string   "model"
    t.text     "description"
    t.integer  "years_old"
    t.float    "price_per_day"
    t.float    "price_per_week"
    t.float    "desposit_amount", default: 0.0
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.index ["user_id"], name: "index_equipment_on_user_id"
  end

  create_table "images", force: :cascade do |t|
    t.integer  "imageable_id"
    t.string   "imageable_type"
    t.string   "file"
    t.boolean  "primary",        default: true
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  create_table "owners_usages", force: :cascade do |t|
    t.integer  "equipment_id"
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["equipment_id"], name: "index_owners_usages_on_equipment_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer  "rateable_id"
    t.string   "rateable_type"
    t.integer  "score"
    t.text     "comment"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "rentals", force: :cascade do |t|
    t.integer  "equipment_id"
    t.integer  "user_id"
    t.date     "pickup_date"
    t.date     "dropoff_date"
    t.float    "pick_up_time"
    t.float    "sub_total"
    t.float    "rental_deposit",    default: 0.0
    t.float    "rental_total"
    t.integer  "total_rental_days"
    t.boolean  "rental_completed",  default: false
    t.boolean  "rental_comfirmed",  default: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.index ["equipment_id"], name: "index_rentals_on_equipment_id"
    t.index ["user_id"], name: "index_rentals_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.string   "username"
    t.string   "street_address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "country"
    t.integer  "home_phone"
    t.integer  "cell_phone"
    t.float    "lng"
    t.float    "lat"
    t.string   "password"
    t.string   "password_digest"
    t.boolean  "restricted_availiability"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.string   "provider"
    t.string   "uid"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
  end

end
