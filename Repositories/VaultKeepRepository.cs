using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using API_Users.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace API_Users.Repositories
{
  public class VaultKeepRepository : DbContext
    {
        // private readonly IDbConnection _db;

        public VaultKeepRepository(IDbConnection db): base(db)
        {
            // _db = db;
        }

        // Find One Find Many add update delete
        public IEnumerable<VaultKeep> GetAll(int Userid)
        {
            var vaultkeeps = _db.Query<VaultKeep>($"SELECT * FROM VaultKeeps WHERE Userid = {Userid}", Userid);
            return vaultkeeps;
        }

        public VaultKeep GetById(int id)
        {
            return _db.QueryFirstOrDefault<VaultKeep>($"SELECT * FROM VaultKeeps WHERE id = @id", id);
        }

        public VaultKeep Add(VaultKeep vaultkeep)
        {

            int id = _db.ExecuteScalar<int>("INSERT INTO VaultKeeps (VaultId, KeepId, UserId)"
                        + " VALUES(@VaultId, @KeepId, @UserId); SELECT LAST_INSERT_ID()", new
                        {
                            vaultkeep.VaultId,
                            vaultkeep.KeepId,
                            vaultkeep.UserId
                        });
            vaultkeep.Id = id;
            return vaultkeep;

        }

        public VaultKeep GetOneByIdAndUpdate(int id, VaultKeep vaultkeep)
        {
            return _db.QueryFirstOrDefault<VaultKeep>($@"
                UPDATE VaultKeeps SET  
                    VaultId = @VaultId,
                    KeepId = @KeepId,
                    UserId = @UserId,
                WHERE Id = {id};
                SELECT * FROM VaultKeeps WHERE id = {id};", vaultkeep);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute(@"
                DELETE FROM VaultKeeps WHERE Id = @id
            ", id);
            return success > 0 ? "success" : "umm that didnt work";
        }
    }
}
