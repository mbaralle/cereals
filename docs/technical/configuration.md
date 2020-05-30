---
layout: page
title: Configuration
description: "M³ ADR module configuration"
toc: true
---

back/main/conf/application.conf

The configuration file contains the usual configuration parameters for Play and Akka, plus the ADR module specific configuration :

```
priority-stashed-actor.mailbox-type = "eu.macq.m3.libkami.utils.PriorityStashedMailbox"

m3 {
  zk {
    url = "127.0.0.1:2181"
  }
  kafka {
    bootstrapservers = "127.0.0.1:9092"
    nrt {
      partitions = 2
    }
  }

  mongodb {
    collection-change.frequency-ms = 10000
    servers = ["127.0.0.1:27017"]

    // This value must be increased according to the number of cameras in the system, as we need cache for every camera,
    // camera-group, etc. So to avoid any issue, we allow up to 10 000 elements in the query-cache
    cache.maximum-size = 10000
  }

  node = "localhost"
  core-baba {
    znode = "/macq/m3/core-baba/election"
    timeout = 5000
  }

  expiration_ms = 3600000
  event_expiration_ms = 3600000
  matching_expiration_ms = 3600000
  camera_alarm_expiration_ms = 3600000

  adr-matching {
    # Topic to read data from
    source-topic = "batch"

    # Minimum similitude to accept a vehicle as match. This only applies if we do not have any match with the
    # mapping key (default match is 100% similitude for the same mapping key).
    # Value must be between 0 & 100, and can be a float
    minimum-similitude = 90

    camera.max-recovery-duration = 7 days

    buffer = {
      retention-time = 4 hour
      max-entries = 100000
      entries-for-warning = 500 # Number of entries for a given partition key before we log a warning
      database-cache-duration = 5 minutes # How much time we can keep track of the buffer info from the db. Not an issue to have a big value
    }

    groups = {
      database-cache-duration = 1 minute # How much time we can keep track of the adr groups from the db
      # Important: If the following is not set, we use the default m3.matching_expiration_ms.
      # matching-expiration = 1 hour
    }
  }
}
```
