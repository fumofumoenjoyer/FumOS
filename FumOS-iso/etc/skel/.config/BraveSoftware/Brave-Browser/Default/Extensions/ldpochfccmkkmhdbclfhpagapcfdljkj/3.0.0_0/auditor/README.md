# Decentraleyes Audit

This resource auditor allows any user and extension reviewer to verify the integrity of the bundled resources. It provides a quick and reliable way to compare all bundled libraries to their original sources.

## Prerequisites

* Node.js 20.0.0 *(or higher)*.

## Usage Instructions

1. Open up a terminal, or a command prompt, and `cd` into its directory.

2. Run the audit script by executing *one* of the following commands:

```bash
node run -r # Validate recently updated resources.
node run # Validate all bundled resources.
```
***Note:** Append ` > report.txt` to write the output to a file.*
