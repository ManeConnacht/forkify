// Global app controller
import Search from './models/Search'
/** global state of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - liked recipes
*/
const state = {}

const controlSearch = () => {
    // 1) Get query from the view
    const query = 'pizza'

    if (query) {
        // 2)New search object and add to state
        state.search = new Search(query)

        //3) Prepare UI for results

        //4 Search for recipes
        state.search.getResult()
        console.log(state)
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()

})




