# git-friendly-postman

<div align="center">

![Neko Logo](https://raw.githubusercontent.com/nekoverse-api/neko-core/refs/heads/main/Docs/Logo/logo.svg)

</div>



## Why do I need this s**t?

Postman collections are stored in JSON format, which can be lengthy and complex. This makes it challenging to manage changes in Git repositories, as large JSON files are harder to track and review. Additionally, updating the file without using the Postman UI can be cumbersome and prone to errors.

## Install 

```sh
npm install -g git-friendly-postman
```

Test 

```
git-friendly-postman --help
```

## Example

now you are able to organize your collection in YAML using `!!import/single` like this:

```yaml
info:
  _postman_id: 97d729c1-ac26-46b9-ad21-1cc452fb6f10
  name: EchoNekoApi
  schema: https://schema.getpostman.com/json/collection/v2.1.0/collection.json
  _exporter_id: '157309'

item:
  - name: Users
    item:
      - !!import/single users/create-user.request.yaml
      - !!import/single users/get-all-users.request.yaml

  - name: Pets
    item:
      - !!import/single pets/get-all-pets.request.yaml

  - !!import/single test.request.yaml
```

With the following folders:

- Sample: [./sample/collection](https://github.com/Gary-Ascuy/git-friendly-postman/tree/main/sample/collection)
    - `pets`
        - `get-all-pets.request.yaml`
    - `users`
        - `create-user.request.yaml`
        - `get-all-users.request.yaml`
    - `test.request.yaml`
    - `postman.yaml`

And use the following command to run the collection into your CI/CD:

```sh
git-friendly-postman --verbose ./sample/collection/postman.yaml
newman run ./sample/collection/postman.json
git-friendly-postman --verbose --clean
```


## Run Postman Collection

It allows you create temporarily a JSON file to execute postman or newman 

```sh
git-friendly-postman ./collection.yaml && newman run ./collection.json && git-friendly-postman --clean
```

Example with logs
```sh
# Creates temp collection.json same name same path
git-friendly-postman --verbose \
    ./sample/git-friendly-collection/EchoNekoApi.postman_collection.yaml

# Run postman collection with newman
newman run ./sample/git-friendly-collection/EchoNekoApi.postman_collection.json

# Removes json and cache files
git-friendly-postman --verbose --clean
```

## Export 

It allows you convert your Postman collection into YAML file

```sh
git-friendly-postman  --verbose \
    --export ./sample/export/EchoNekoApi.postman_collection.json \
    --output-file ./sample/export/EchoNekoApi.postman_collection.yaml
```

## Powered By

- Gary Ascuy from [Nekoverse](https://home.nekoverse.me/manifesto) / [Organization](https://github.com/nekoverse-api)

## References 

- Special thanks to [yaml-import](https://www.npmjs.com/package/yaml-import) - [rafamel](https://www.npmjs.com/~rafamel)