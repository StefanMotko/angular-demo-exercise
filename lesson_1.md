0. Start the server using `ng serve --open` and do not close the page that opens. Angular will keep it updated on its own (unless it crashes, in which case `Refreshing` the page is necessary).
1. Go to `src/app/app.component.html` and delete everything inside. See the updated page.
2. Type `npm generate component movie-details` into the terminal. See new generated files (`src/app/movie-details/*`).
3. Try displaying the `movie-details` component on the webpage.

    - Hint: Look at `src/index.html` line 12 and at `src/app/app.component.ts` line 4

    - Solution: Put the following line of code into `app.component.html`:

    - See page updated with contents of `movie-details.component.ts`

```HTML

<app-movie-details></app-movie-details>

```


4. Go to `https://api.themoviedb.org/3/movie/24428?api_key=71df36679a0472d74597f58f6fec0185` to download sample data.
    - Use a JSON formatter (online: `http://jsonlint.com`) to format the JSON.
5. Paste the formatted JSON into `movie-details.component.ts` under the `movie` attribute like so:

```typescript

...
export class MovieDetailsComponent implements OnInit {

    movie = {
        // pasted JSON
    };
...

```

6. Look at the pasted JSON, find the name of the key where the movie's title is stored.

7. Display the title of the movie in a `<h5>` tag.
    - Hint 1: Placing a TypeScript expression in twin curly braces like so: `{{expression}}` will make Angular evaluate it and replace it with the result in the final HTML.
    - Hint 2: These expressions are evaluated with the attributes defined in the TypeScript file in local scope.
    - Solution: Replace the contents of `movie-details.component.html` with `<h5>{{movie.original_title}}</h5>`

8. Display the overview attribute of the movie using property binding.
    - Hint: Properties of HTML elements can be bound using property binding syntax: `[property-name]="expression"`
    - Solution: Add the following line to `movie-details.component.html`: `<p [innerHTML]="movie.overview"></p>`

9. Type `ng generate service --module=app comment.service.ts` into the terminal.