using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API_Users.Models;
using API_Users.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API_Users.Controllers
{
    [Route("api/[controller]")]
    public class VaultKeepsController : Controller
    {
        private readonly VaultKeepRepository db;
        public VaultKeepsController(VaultKeepRepository vaultkeepRepo)
        {
            db = vaultkeepRepo;
        }

        // GET api/vaults
        [HttpGet("user/{userId}")]
        public IEnumerable<Keep> GetAll(int userId)
        {
            return db.GetAll(userId);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public VaultKeep Get(int id)
        {
            return db.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public VaultKeep Post([FromBody]VaultKeep vaultkeep)
        {
            return db.Add(vaultkeep);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public VaultKeep Put(int id, [FromBody]VaultKeep vaultkeep)
        {
            if (ModelState.IsValid)
            {
                return db.GetOneByIdAndUpdate(id, vaultkeep);
            }
            return null;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return db.FindByIdAndRemove(id);
        }
    }
}