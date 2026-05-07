# Asset replacement log

All placeholder imagery uses `https://picsum.photos/seed/<slug>-<n>/...`.
Each slot below needs a final client-supplied asset before launch.

Images should be exported at a long-edge of 2400px minimum, colour-managed
(sRGB), with descriptive alt text supplied per frame.

## Home page

| Slot | Current placeholder | Replacement target |
| --- | --- | --- |
| Signature hero aside | `picsum.photos/seed/ncd-hero-signature/1200/1500` | A single portrait-format photo of a flagship project (Dominican Chapel, New Culture Studios, or Oba Akenzua Cultural Centre). |

## Projects (`src/content/projects.ts`)

### Dominican Chapel, Ibadan

| Slot | Current placeholder | Required image |
| --- | --- | --- |
| Hero | `dominican-chapel-ibadan-hero` | Wide exterior, laterite walls + timber roof, ideally at dusk or golden hour. |
| 01 | `dominican-chapel-ibadan-01` | Exterior elevation, full height of bell tower. |
| 02 | `dominican-chapel-ibadan-02` | Close-up of bell tower pinnacles. |
| 03 | `dominican-chapel-ibadan-03` | Interior nave, timber roof structure from below. |
| 04 | `dominican-chapel-ibadan-04` | Laterite stonework detail at entrance. |

### New Culture Studios, Ibadan

| Slot | Current placeholder | Required image |
| --- | --- | --- |
| Hero | `new-culture-studios-ibadan-hero` | Compound overview. |
| 01 | `new-culture-studios-ibadan-01` | Courtyard with timber colonnade. |
| 02 | `new-culture-studios-ibadan-02` | Amphitheatre seating. |
| 03 | `new-culture-studios-ibadan-03` | Gallery interior with filtered daylight. |
| 04 | `new-culture-studios-ibadan-04` | Exterior stairway. |

### Oba Akenzua Cultural Centre, Benin City

| Slot | Current placeholder | Required image |
| --- | --- | --- |
| Hero | `oba-akenzua-cultural-centre-hero` | Wide shot with civic plaza in foreground. |
| 01 | `oba-akenzua-cultural-centre-01` | Façade elevation. |
| 02 | `oba-akenzua-cultural-centre-02` | Performance hall interior. |
| 03 | `oba-akenzua-cultural-centre-03` | Entrance canopy / carved screens. |
| 04 | `oba-akenzua-cultural-centre-04` | Rear elevation + landscaping. |

## Open-graph image

| Slot | Current placeholder | Required image |
| --- | --- | --- |
| Default OG | `/og-default.png` (not yet in `/public`) | Programmatic OG via `next/og` to be added in the SEO phase. |

## Notes

- Photography credit must be supplied for every final asset — credits line in
  `src/content/projects.ts` currently reads "Placeholder — client to supply".
- All images require descriptive alt text (no decorative-by-default for
  project imagery).
- Private commissions should use blurred or substituted photography per the
  confidentiality policy in `PLAN.md` §3, item 10.
