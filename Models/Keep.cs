namespace API_Users.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string keepImage { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public int KeepCount { get; set; }
    }
}