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
    public class VaultsController : Controller
    {
        private readonly VaultRepository db;
        public VaultsController(VaultRepository vaultRepo)
        {
            db = vaultRepo;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return db.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            return db.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public Vault Post([FromBody]Vault vault)
        {
            return db.Add(vault);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Vault Put(int id, [FromBody]Vault vault)
        {
            if (ModelState.IsValid)
            {
                return db.GetOneByIdAndUpdate(id, vault);
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