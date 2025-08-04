namespace server.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Casting { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Director { get; set; }
        public string Producer { get; set; }
    }
}
