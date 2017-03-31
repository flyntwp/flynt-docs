# Setting up Flynt

## Requirements

Before you can get started with Flynt, there are some requirements that need to be met on your local machine. The following tools and versions are required for Flynt to work correctly. Other versions than the ones listed here are not explicitly tested and may or may not work with Flynt.

### Command Line

These tools must be available in your system's PATH environment.

|                    Command Line Tool                    | Version |
| ------------------------------------------------------- | ------- |
| [Node](https://nodejs.org/)                             | >= 6.0  |
| [Composer](https://getcomposer.org/)                    | >= 1.2  |
| [Yarn](https://yarnpkg.com/)*                           | >= 0.21 |
| [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer)** | >= 2.5  |

\*_You can use npm as well, but Yarn is strongly recommended._  
\*\*_Not strictly required, but strongly recommended._

### Server

|           Requirement           | Version |
| ------------------------------- | ------- |
| [PHP](http://php.net/)          | >= 5.6  |
| [MySQL](https://www.mysql.com/) | >= 5.6  |

Additionally, a tool for managing your virtual host setup (e.g. [Mamp Pro](https://www.mamp.info/en/mamp-pro/)) is recommended.

## Installation

We recommend using one of the tools below to install the requirements listed above:

- [Trellis](https://roots.io/trellis/)
- [Scotchbox](https://box.scotch.io/)

As soon as you have your environment set up, follow the steps below to install Flynt.

1. Using the command line, install the Flynt CLI:
  ```
  yarn global add flyntwp/flynt-cli
  ```

2. Run the create command and follow the instructions:
  ```
  flynt create
  ```

3. Set up the virtual host provided during step 2 and you're good to go!

<div class="alert alert-info">
  <strong>Questions?</strong>
  
  <p>If you are stuck or having issues setting Flynt up, feel free to check the <a href="faq.md">FAQ</a> or <a href="https://github.com/flyntwp/flynt-theme/issues" target="_blank">Github Issues</a> for further assistance.</p>
</div>
