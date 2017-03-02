using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using RestSharp.Authenticators;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;



namespace AspKnockout.Models
{
    public class SpotifyAPI
    {
        public static Task<IRestResponse> GetResponseContentAsync(RestClient theClient, RestRequest theRequest)
        {
            var tcs = new TaskCompletionSource<IRestResponse>();
            theClient.ExecuteAsync(theRequest, response => {
                tcs.SetResult(response);
            });
            return tcs.Task;
        }

        public AlbumQuery GetAlbum(string album)
        {
            var client = new RestClient("https://api.spotify.com/v1/");
            var request = new RestRequest("search?type=album&q="+album, Method.GET);
            var response = new RestResponse();

            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            AlbumQuery jsonResponse = JsonConvert.DeserializeObject<AlbumQuery>(response.Content);
            Debug.WriteLine(jsonResponse);
            return jsonResponse;
        }
    }
}
