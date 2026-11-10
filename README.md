# CANSTOREnergy snowflake experiment

A separate public preview of the snowflake design. Open `index.html` or `snowflake.html`.


An interactive snowflake showing the accumulation of research output records
across three project years and collaboration between recorded contributors.

Open `index.html` or `snowflake.html`. Scroll through the year chapters and
select a seed or a person to explore their connections. The site respects
reduced-motion preferences and supports keyboard selection and Escape to close.

This folder is a standalone static site for public GitHub Pages hosting.
It contains no password gate and does not require a server-side application.
In GitHub Settings → Pages, choose “Deploy from a branch,” then `main` and `/ (root)`.

## Data and visual encodings

- Cumulative output records: 7 → 42 → 76.
- Contributors with recorded outputs: 60.
- PI categories: 56 standard, 18 multiple PIs from one subteam, 2 cross-subteam PIs.
- Five outputs lack recorded authors; their PI involvement is marked unknown.
- Seed shapes: circles for 36 journal outputs, gently scalloped circles for 31 conference outputs,
  and dashed circles for 9 other outputs (including interviews and reports or briefs).
- Person sizes reflect total recorded outputs across all three years.
- Seed sizes, branch lengths, depth shading, and light motion are decorative; positions remain fixed across years.

Counts preserve source records rather than deduplicating publications. PI categories
use the authors' personnel records. Original source data and network:
[CANSTORE interdisciplinary mapping](https://github.com/trisaratopss/canstore/tree/main/CANSTORE-interdisciplinary-mapping-clean).

DIRECT-only profiles include research context and links to relevant workstreams.
Source provenance is retained in the underlying metadata; the interface focuses on research classification.
Workstream participation is separate from publication authorship. No publication-to-workstream
links have been verified. Partial rosters omit ambiguous or non-DIRECT references.
Discover and Develop profiles and all original source records remain unchanged.

All 76 outputs use the 13 scope assignments in CANSTORE-current-scopes_LL.xlsx, supplied on November 10, 2026. The assignments join by publication ID in assets/dandelion_scopes.js and apply to layout, tooltips, and details. No output remains unassigned or marked Needs review. The original records remain intact in the data payload; the reviewed scope layer takes precedence. Scope membership remains separate from workstream participation.

Narrative titles and descriptions are intentionally left as placeholders.
Outfit fonts are distributed with their included Open Font License.
