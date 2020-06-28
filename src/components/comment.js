import React, { useEffect } from 'react'

const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement('script')
  script.async = true
  script.src = src
  script.id = id
  parentElement.appendChild(script)
  return script
}

const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id)
  if (script) {
    parentElement.removeChild(script)
  }
}

const remark_config = {
  host: `${process.env.REMARK42_URL}`, // hostname of remark server, same as REMARK_URL in backend config, e.g. "https://demo.remark42.com"
  site_id: 'blog',
  components: ['embed'], // optional param; which components to load. default to ["embed"]
  // to load all components define components as ['embed', 'last-comments', 'counter']
  // available component are:
  //     - 'embed': basic comments widget
  //     - 'last-comments': last comments widget, see `Last Comments` section below
  //     - 'counter': counter widget, see `Counter` section below
  url: undefined, // optional param; if it isn't defined
  // `window.location.origin + window.location.pathname` will be used,
  //
  // Note that if you use query parameters as significant part of url
  // (the one that actually changes content on page)
  // you will have to configure url manually to keep query params, as
  // `window.location.origin + window.location.pathname` doesn't contain query params and
  // hash. For example default url for `https://example/com/example-post?id=1#hash`
  // would be `https://example/com/example-post`.
  //
  // The problem with query params is that they often contain useless params added by
  // various trackers (utm params) and doesn't have defined order, so Remark treats differently
  // all this examples:
  // https://example.com/?postid=1&date=2007-02-11
  // https://example.com/?date=2007-02-11&postid=1
  // https://example.com/?date=2007-02-11&postid=1&utm_source=google
  //
  // If you deal with query parameters make sure you pass only significant part of it
  // in well defined order
  max_shown_comments: 10, // optional param; if it isn't defined default value (15) will be used
  theme: 'light', // optional param; if it isn't defined default value ('light') will be used
  locale: 'en', // set up locale and language, if it isn't defined default value ('en') will be used
}

const Comment = ({ id }) => {
  useEffect(() => {
    if (!window) {
      return
    }
    const document = window.document
    remark_config.url = id
    window.remark_config = remark_config
    if (document.getElementById('remark42')) {
      insertScript(
        `${remark_config.host}/web/embed.js`,
        `remark42-script`,
        document.body
      )
    }
    return () => removeScript(`remark42-script`, document.body)
  }, [id])
  return (
    <div>
      {' '}
      <h1>Comments</h1> <div id={`remark42`} />{' '}
    </div>
  )
}

export default Comment
