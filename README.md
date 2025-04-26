# git-friendly-postman

## Why do i need this s**t?

Postman collections are stored in JSON format, which can be lengthy and complex. This makes it challenging to manage changes in Git repositories, as large JSON files are harder to track and review. Additionally, updating the file without using the Postman UI can be cumbersome and prone to errors.



## Run Postman Collection

It allows you create temporarily a JSON file to execute postman or newman 

```sh
git-friendly-postman ./collection.yaml && postman collection run ./collection.json && git-friendly-postman --clean
```

Example with logs
```sh
git-friendly-postman --verbose \
    ./sample/git-friendly-collection/EchoNekoApi.postman_collection.yaml \
&& postman collection run ./sample/git-friendly-collection/EchoNekoApi.postman_collection.json \
&& git-friendly-postman --verbose --clean
```

## Export 

It allows you convert your Postman collection into YAML file

```sh
git-friendly-postman  --verbose \
    --export ./sample/export/EchoNekoApi.postman_collection.json \
    --output-file ./sample/export/EchoNekoApi.postman_collection.yaml
```