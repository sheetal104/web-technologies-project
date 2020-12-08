import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
/* import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Tweet = props => {
  const {text, screen_name } = props
  return (
    <Card raised centered fluid>
      <Card.Content>
        <Card.Meta><a href={`https://twitter.com/${screen_name}`} target='_blank'>{`@${screen_name}`}</a></Card.Meta>
        <Card.Description>
          {text}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
} */

function Tweet(){
    return (
      <div>
      <script src="https://assets.juicer.io/embed.js" type="text/javascript"></script>
      <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
      <ul class="juicer-feed" data-feed-id="pesuniversity"></ul>
      </div>)
}

export default Tweet