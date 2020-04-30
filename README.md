# This Week in Hathor

Is a weekly aggregator of news, updates, announcements and anything interesting related to [Hathor
Network](https://hathor.network/).


## Bulding locally

To build test the page locally you will need Ruby and RubyGems (which comes with Ruby). To set it up:

```
bundle install
```

And then to serve locally (and auto-rebuild on changes):

```
bundle exec jekyll serve --incremental
```

Depending on the changes (changing the theme, adding or removing the layout, ...) you might need to clean the Jekyll
cache, stop the server and then run:

```
bundle exec jekyll clean
```

Or even:

```
rm -rf .jekyll-cache .jekyll-medatada _site
```
