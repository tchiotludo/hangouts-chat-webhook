# hangouts-chat-webhook
> Fluent api to send webhook to Hangouts chat

[![license](https://img.shields.io/github/license/tchiotludo/hangouts-chat-webhook.svg?maxAge=2592000&style=flat-square)](https://github.com/tchiotludo/hangouts-chat-webhook/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/hangouts-chat-webhook.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/hangouts-chat-webhook)
[![Dependency Status](https://david-dm.org/tchiotludo/hangouts-chat-webhook.svg?style=flat-square)](https://david-dm.org/tchiotludo/hangouts-chat-webhook)
[![devDependency Status](https://david-dm.org/tchiotludo/hangouts-chat-webhook/dev-status.svg?style=flat-square)](https://david-dm.org/tchiotludo/hangouts-chat-webhook#info=devDependencies)


## Installation

```sh
$ npm install --save hangout-chat-tester
```

## Usage

We don't include any http client in order to let you choose your preferred one.
Below is a simple example with [superagent](https://github.com/visionmedia/superagent).

```js
import * as superagent from "superagent";
import { Button, Card, CardHeader, Icon, Image, KeyValue, Message, OnClick, OpenLink, Section, TextButton, TextParagraph, WidgetMarkup } from "hangouts-chat-webhook";

const message: Message = new Message()
    .addCard(new Card()
        .setHeader(new CardHeader()
            .setTitle("Google Chat")
            .setSubtitle("Incoming Webhook")
        )
        .addSection(new Section()
            .addWidget(new WidgetMarkup()
                .setImage(new Image()
                    .setImageUrl("https://www.gstatic.com/images/branding/product/2x/chat_64dp.png")
                )
            )
            .addWidget(new WidgetMarkup()
                .setKeyValue(new KeyValue()
                    .setIcon(Icon.DESCRIPTION)
                    .setTopLabel("Key")
                    .setContent("Value")
                )
            )
            .addWidget(new WidgetMarkup()
                .setTextParagraph(new TextParagraph()
                    .setText("Incoming webhook")
                )
            )
            .addWidget(new WidgetMarkup()
                .addButton(new Button()
                    .setTextButton(new TextButton()
                        .setText("Open")
                        .setOnClick(new OnClick()
                            .setOpenLink(new OpenLink()
                                .setUrl("https://gsuite.google.com/products/chat/")
                            )
                        )
                    )
                )
            )
        )
    );

superagent.post("https://chat.googleapis.com/v1/spaces/...")
    .set("Content-Type", "application/json; charset=UTF-8")
    .send(message)
    .then((res: superagent.Response) => {
        console.log(res.status, res.body);
    })
    .catch((err: any) => {
        console.error(err.response && err.response.text ? JSON.parse(err.response.text) : err);
    })
;

```

## Warning 
The Api list is coming directly from [Google Api](http://googleapis.github.io/google-api-nodejs-client/modules/_apis_chat_v1_.html), BUT a lot of method are present (ex: `keyValue.setBottomLabel`) but **don't work** with hangouts chat, resulting a response code 200 and a blank message. No way for developper to understand the reason. 

Also, the [Hangouts Chat message formats documentation](https://developers.google.com/hangouts/chat/reference/message-formats/) is not complete and don't allow to clearly understand how to build message correctly.

You have to test directly on hangout chat in order to be sure that the message will work.

## License
MIT © [tchiotludo](https://github.com/tchiotludo)