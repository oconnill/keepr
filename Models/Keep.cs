namespace API_Users.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public int VaultId { get; set; }
        public int KeepId { get; set; }
        public int KeepCount { get; set; }


    }
}