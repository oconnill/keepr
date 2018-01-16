using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using API_Users.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace API_Users.Repositories
{
  public class VaultRepository : DbContext
    {
        // private readonly IDbConnection _db;

        public VaultRepository(IDbConnection db): base(db)
        {
            // _db = db;
        }

        // Find One Find Many add update delete
        public IEnumerable<Vault> GetAll(int Userid)
        {
            var vaults = _db.Query<Vault>($"SELECT * FROM Vaults WHERE Userid = {Userid}", Userid);
            return vaults;
        }

        public Vault GetById(int id)
        {
            return _db.QueryFirstOrDefault<Vault>($"SELECT * FROM Vaults WHERE id = @id", id);
        }

        public Vault Add(Vault vault)
        {

            int id = _db.ExecuteScalar<int>("INSERT INTO Vaults (Name, Description)"
                        + " VALUES(@Name, @Description); SELECT LAST_INSERT_ID()", new
                        {
                            vault.Name,
                            vault.Description,
                        });
            vault.Id = id;
            return vault;

        }

        public Vault GetOneByIdAndUpdate(int id, Vault vault)
        {
            return _db.QueryFirstOrDefault<Vault>($@"
                UPDATE Vaults SET  
                    Name = @Name,
                    Description = @Description,
                WHERE Id = {id};
                SELECT * FROM Vaults WHERE id = {id};", vault);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute(@"
                DELETE FROM Vaults WHERE Id = @id
            ", id);
            return success > 0 ? "success" : "umm that didnt work";
        }
    }
}
