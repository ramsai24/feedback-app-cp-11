// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {emojiClick: true}

  onFeedBack = () => {
    this.setState({emojiClick: false})
  }

  render() {
    const {resources} = this.props
    const {emojiClick} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          {emojiClick ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>

              <ul className="emoji-container">
                {resources.emojis.map(eachEmoji => (
                  <li className="emoji-item" key={eachEmoji.id}>
                    <button
                      type="button"
                      key={eachEmoji.id}
                      onClick={this.onFeedBack}
                      className="emoji-btn"
                    >
                      <img
                        className="img"
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        key={eachEmoji.id}
                      />
                    </button>
                    <p>{eachEmoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="thankyou-container">
              <img
                className="img"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
