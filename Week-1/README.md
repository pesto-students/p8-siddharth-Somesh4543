# URL 

When we want to visit a perticular website, then we type the website name in the address bar of the browser. 

When we type URL to reach the server where the website is hosted.

1. The browser looks for the IP address of the domain in the (Domain Name Server) ONS.

2. The Browser then initials a TCP connection with the server

3. Then the browser sends an HTTP request to the server.

4. The server handles the incoming request and sends an HTTP response.

5. The browser display the HTML content.
   
   ---

## Functionality of the browser   
    Web browser is a software application used to access information on world wide web is called web browser. When a user requests some information, the web browser featches the data from web server and display the webpage on the user's screen.

Main functionality of trouse is: - 
- To retrive information from the www and making it available to the user.

- Visiting website can be done .When we enter an VRL the web server takes us to the website. 

- It make gitting data easily available.

- It is also multitasking.
  
  ---
  ## Browser's high level structure.
   1. The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page. 
   2. The browser engine: marshals actions between the UI and the rendering engine.
   3. The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
   4. Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
   5. UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
   6. JavaScript interpreter. Used to parse and execute JavaScript code.
   
   7. Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

---   

![image](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)

---

## Rendering Engine
Rendering engine is responsible for rendering a specific web page requseted by users on their url. It interpretes HTML and XML documents along with images that are styled or formatted using CSS, and a final layout is generated, which is displayed on the user interface.

---

![image](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)

---

## Parsers 

Parsers break the input they get into parts such as objets or methods and their attributes or options. There are the managed by othe programming, such as other components in a compiler. 

Once the data parsed then user can structure it however he wants it.
 ex:- If we recive data in HTML format with the help of parser, we will be able to translate the data into more understandable form.

  At first data is scraped from a targated webste and then translated into format which is easier to read

 **It's importance**

Parser basically bring a portion of comment and instructions and splits them into other pieces in progamming. Then it checks if the information is enough to develope a data structure such as a parse tree.

- Data parsers are of great help when it comes to search optimization. For ex:- you can optimize tasks such as gathering information analyzing competitors prices or creating lists of products.

 - Due to the data it brings during the optimizatio it also helps employees with productivity and efficienses.

 - Combination of web scraping and data parsing also helps in research.

 - Prasing helps in collecting data and turning it into a format
   easier to understand and use.

   ---
   ## Script Processors

   The script processor executes Javascript code to process an event. The processor uses a pure go implementation of ECMA Script 5-1 and has no external dependencies.

   ---

   ## Tree Construction

    The input to the tree construction stage is a sequence of tokens from tokenization stage. The tree construction stage is associated with DOM document object when a parser is created. The output of this stage consists of dynamically modifying or entering that document's DOM tree.

    ---

    ## Script tags are executed in order.

    - Construct the DOM
    - Construct the CSSOM
    - Merge the DOM and CSSOM to construct a Render Tree
    - Layout of the page, Painting of the page.
  
  ---

  ## Layout and Painting

  The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen.

 **Layout**

  - Layout computes the exact position and size of each object.

  - The "Layout" event captures the render tree construction, position, and size calculation in the Timeline.

**Painting**

 -Painting is the last step of rendering phase for a page load. This phase takes the box model tree created during the layout rendering phase and positions each pixels according to the screen.


