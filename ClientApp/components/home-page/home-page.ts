import * as ko from 'knockout';

class HomePageViewModel {
    //constructor() {
    //    fetch('/api/Spotify/GetAlbums')
    //        .then(response => response.json() as Promise<>)
    //        .then(data => {
    //            this.forecasts(data);
    //        });
    //}
}

export default { viewModel: HomePageViewModel, template: require('./home-page.html') };
