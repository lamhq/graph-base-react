mongoexport --host localhost:27017 --db rblog -c common.users --out data/users.json --jsonArray --pretty
mongoexport --host localhost:27017 --db rblog -c blog.posts --out data/posts.json --jsonArray --pretty