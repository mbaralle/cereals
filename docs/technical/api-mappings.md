---
layout: page
title: API Mappings
description: "M³ ADR related API Mappings"
toc: true
---

## ADR Matchings

To query the ADR matchings using M³ API, use the path ```/measures/adrMatching```

<details markdown="1">
<summary>See configuration</summary>
```json
{
  "_id": "5e673314eeb67b5ad7f20c94",
  "path": "measures/adrMatching",
  "database": "m3measure",
  "collection": "adrMatchings",
  "_database": "m3config",
  "_collection": "apiMappings",
  "members_protected": true,
  "_allow_replacement": true
}
```
</details>

## ADR References

To query the ADR references using M³ API, use the path ```/config/adrReference```

<details markdown="1">
<summary>See configuration</summary>
```json
{
  "_id": "5e84c260565fd4a23e02bfa9",
  "path": "config/adrReference",
  "database": "m3config",
  "collection": "adrReferences",
  "_database": "m3config",
  "_collection": "apiMappings",
  "members_protected": true,
  "_allow_replacement": true
}
```
</details>
