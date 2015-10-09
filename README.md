AngularJS Unit Testing
============

# Setup

#### Prerequisites

* [Node.js](https://nodejs.org/en/)
* gulp (`npm install -g gulp`)

#### Run

**Unit tests:** `npm test`
**Run:** `npm start`

# Git commit hook

To keep some consistency to our git commit messaging link this script to git's commit hook system. This will keep you
from committing messages in-line with our [commit message styleguide](https://docs.google.com/document/d/1OLFfQHdZXpd-oBNik3_rgFyPooZ3U4-KAGQrEpQVbXs/edit?usp=sharing)

`ln -s ../../validate-commit-msg.js .git/hooks/commit-msg`

NOTE:
For MAC sourcetree users, you may have to run this in the terminal
`sudo -s /usr/local/bin/node /usr/bin/node`