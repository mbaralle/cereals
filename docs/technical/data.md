---
layout: page
title: Data
description: "Data inserted in database on install"
toc: true
---

During module install, initial data is inserted in database. This data can be found in ```base/data```
## API Mappings

See [dedicated documentation](api-mappings "API Mappings").

## ADR-related data

### ```danger.json```

Contains the **main ADR danger types** as defined by the ADR agreement (explosive, flammability, oxidising...).
*code + label*

### ```hin.json```

Contains the **Hazard Identification Numbers** as defined by the ADR agreement.
*code + label*

### Images

Contains the **ADR pictograms**.

#### ```images.json```

Contains the references to the data (binary).

#### ```images_data.json```

Contains the data (binary) for each pictogram.

### ```labels.json```

Contains **ADR classification labels**.

### ```un.json```

Contains **United Nations numbers**, referencing dangerous goods as defined in the [UN Recommendations on the Transport of Dangerous Goods](https://www.unece.org/?id=3598){:target="_blank"}
