namespace API_Users.Models
{
    public class Vault
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } 
        public int creatorID { get; set; }
    }
}