# IEEE-iSES Website Maintenance Work Document

## Purpose

This document explains how to maintain, update, and generate the
IEEE-iSES conference website using the Eleventy (11ty) maintainable
system. Future organizers only need to update JSON data files. The
website will automatically regenerate correctly.

------------------------------------------------------------------------

## Prerequisites

Please install the following software:

-   Node.js LTS (v18 or v20 recommended)
-   Visual Studio Code (recommended)
-   Git (optional, required only for GitHub deployment)

------------------------------------------------------------------------

## Project Structure

### Source Folder (Editable)

    src/
    │
    ├── _data/        # Conference data (site info, people, links, committee, PDFs)
    ├── _includes/    # Layout templates, header, footer
    ├── pages/        # Page content files
    ├── images/       # All images used in the website
    └── assets/       # CSS, JS, and other static files

### Output Folder (Generated --- Do NOT edit manually)

    IEEE-iSES_2026_Website/

This folder contains the complete generated website ready for
deployment.

------------------------------------------------------------------------

## Build and Run Website

### Step 1: Install dependencies

Open a terminal in the project folder and run:

``` bash
npm install
```

### Step 2: Run website locally (for preview)

``` bash
npm run dev
```

### Step 3: Build production website

``` bash
npx @11ty/eleventy
```

The generated production website will be created in:

    IEEE-iSES_2026_Website/

------------------------------------------------------------------------

## Where to Edit Each Year

### Conference Information

Edit:

    src/_data/site.json

Includes:

-   Conference name
-   Year
-   Dates
-   Location
-   Support email
-   Copyright

------------------------------------------------------------------------

### Links and URLs

Edit:

    src/_data/links.json

Includes:

-   Submission links
-   PDF Express link
-   CMT portal link
-   External links

------------------------------------------------------------------------

### People Information

Edit:

    src/_data/people.json

Includes:

-   Names
-   Affiliations
-   Photos
-   Profile URLs

------------------------------------------------------------------------

### Organizing Committee

Edit:

    src/_data/committee.json

Includes:

-   Committee roles
-   Member assignments

------------------------------------------------------------------------

### Important PDFs

Edit:

    src/_data/pdfs.json

Includes:

-   Call for Papers
-   Call for Contributions
-   Other downloadable documents

------------------------------------------------------------------------

### Navigation Menu

Edit:

    src/_includes/partials/header.njk

------------------------------------------------------------------------

### Footer Information

Edit:

    src/_includes/partials/footer.njk

------------------------------------------------------------------------

### Page Content

Edit or add pages in:

    src/pages/

------------------------------------------------------------------------

### Images

Add images to:

    src/images/

------------------------------------------------------------------------

## Output Folder (Deployment Folder)

    IEEE-iSES_2026_Website/

This folder contains:

-   All HTML files
-   Images
-   CSS
-   JavaScript
-   Complete production-ready website

------------------------------------------------------------------------

## Deploy to Server

Upload ONLY the contents of:

    IEEE-iSES_2026_Website/

to your hosting server.

**Do NOT upload the src folder.**

------------------------------------------------------------------------

## Important Rules

Always follow these rules:

-   Always edit JSON files, not generated HTML files
-   Never edit the output folder manually
-   Always rebuild the website after making changes

Build command:

``` bash
npx @11ty/eleventy
```

------------------------------------------------------------------------

## Contact

Support email is defined in:

    src/_data/site.json

Update it there if needed.

------------------------------------------------------------------------

## Summary Workflow

1.  Edit JSON files in `src/_data/`
2.  Run build command:

``` bash
npx @11ty/eleventy
```

3.  Upload contents of:

```{=html}
<!-- -->
```
    IEEE-iSES_2026_Website/

4.  Website is live.

------------------------------------------------------------------------

## Maintained Using Eleventy (11ty)

This system ensures:

-   Easy yearly updates
-   No manual HTML editing required
-   Clean and maintainable structure
-   Automatic website generation
