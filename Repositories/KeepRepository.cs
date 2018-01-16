using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using API_Users.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace API_Users.Repositories
{
  public class KeepRepository : DbContext
    {
        // private readonly IDbConnection _db;

        public KeepRepository(IDbConnection db): base(db)
        {
            // _db = db;
        }

        // Find One Find Many add update delete
        public IEnumerable<Keep> GetAll(int Userid)
        {
            return _db.Query<Keep>("SELECT * FROM Keeps");
        }

        public Keep GetById(int id)
        {
            return _db.QueryFirstOrDefault<Keep>($"SELECT * FROM Keeps WHERE id = @id", id);
        }

        public Keep Add(Keep keep)
        {

            int id = _db.ExecuteScalar<int>("INSERT INTO Keeps (Title, Image, Description, VaultId, KeepId, KeepCount)"
                        + " VALUES(@Title, @Image, @Description, @VaultId, @KeepId, @KeepCount); SELECT LAST_INSERT_ID()", new
                        {
                            keep.Title,
                            keep.Image,
                            keep.Description,
                            keep.VaultId,
                            keep.KeepId,
                            keep.KeepCount
                        });
            keep.Id = id;
            return keep;

        }

        public Keep GetOneByIdAndUpdate(int id, Keep keep)
        {
            return _db.QueryFirstOrDefault<Keep>($@"
                UPDATE Keeps SET  
                    Title = @Title,
                    Image = @Image,
                    Description = @Description,
                    VaultID = @VaultId
                WHERE Id = {id};
                SELECT * FROM Keeps WHERE id = {id};", keep);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute(@"
                DELETE FROM Keeps WHERE Id = @id
            ", id);
            return success > 0 ? "success" : "umm that didnt work";
        }
    }
}
