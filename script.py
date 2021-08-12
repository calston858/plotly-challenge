DB_HOST = "localhost"
DB_NAME = "belly_button_biodiversity"
DB_USER = "postgres"
DB_PASS = "Q12w34e56!"

import psycopg2

conn = psycopg2.connect(dbname = DB_NAME, user = DB_USER, password = DB_PASS, host = DB_HOST)

