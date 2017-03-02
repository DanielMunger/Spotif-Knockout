using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspKnockout.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspKnockout.Controllers
{
    [Route("api/[controller]")]
    public class SpotifyController : Controller
    {
        public AlbumQuery SearchForAlbum(string album)
        {
            SpotifyAPI api = new SpotifyAPI();
            AlbumQuery returnedAlbum = api.GetAlbum(album);
            return returnedAlbum;
        }
    }
}
