using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class RemindMeViewModel
    {
        [EmailAddress(ErrorMessage = "Email is required")]
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
    }
}